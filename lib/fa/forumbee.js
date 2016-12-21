'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaForumbee = function (_React$Component) {
    _inherits(FaForumbee, _React$Component);

    function FaForumbee() {
        _classCallCheck(this, FaForumbee);

        return _possibleConstructorReturn(this, (FaForumbee.__proto__ || Object.getPrototypeOf(FaForumbee)).apply(this, arguments));
    }

    _createClass(FaForumbee, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.8 3.3q-7 2.7-12.4 8.1t-8 12.5q-0.4-1.9-0.4-3.9 0-4.6 2.3-8.6t6.2-6.2 8.6-2.3q1.8 0 3.7 0.4z m6.1 2.7q2 1.5 3.6 3.5-8.7 2.5-15 8.9t-8.9 15.1q-2.1-1.6-3.5-3.6 2.5-8.6 8.9-15t14.9-8.9z m-16.4 29.8q2.6-8 8.5-13.9t13.8-8.6q0.9 2.1 1.2 4.4-6.5 2.7-11.5 7.7t-7.7 11.5q-2.3-0.3-4.3-1.1z m23.8 1.3q-4.3-1.1-8.2-2.6-3 1.9-6.5 2.4 2.5-4.6 6.1-8.3t8.3-6.1q-0.5 3.4-2.3 6.3 1.5 3.9 2.6 8.3z' })
                )
            );
        }
    }]);

    return FaForumbee;
}(React.Component);

exports.default = FaForumbee;
module.exports = exports['default'];