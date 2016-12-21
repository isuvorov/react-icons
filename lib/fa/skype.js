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

var FaSkype = function (_React$Component) {
    _inherits(FaSkype, _React$Component);

    function FaSkype() {
        _classCallCheck(this, FaSkype);

        return _possibleConstructorReturn(this, (FaSkype.__proto__ || Object.getPrototypeOf(FaSkype)).apply(this, arguments));
    }

    _createClass(FaSkype, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.2 23.7q0-1.1-0.5-2t-1-1.5-1.7-1.1-1.8-0.8-2-0.5l-2.3-0.5q-0.6-0.2-1-0.3t-0.7-0.2-0.7-0.4-0.4-0.5-0.1-0.6q0-1.7 3.2-1.7 0.9 0 1.7 0.2t1.2 0.7 0.8 0.7 0.9 0.6 1.1 0.3q1.1 0 1.7-0.7t0.6-1.7q0-1.2-1.2-2.2t-3.2-1.5-4.1-0.6q-1.5 0-2.9 0.4t-2.7 1-2 2-0.7 2.8q0 1.4 0.4 2.4t1.3 1.7 1.8 1.1 2.3 0.7l3.2 0.8q2 0.5 2.5 0.8 0.7 0.5 0.7 1.4 0 0.8-0.9 1.4t-2.3 0.6q-1.1 0-2.1-0.4t-1.4-0.8-1-1-1-0.9-1.3-0.4q-1.1 0-1.6 0.7t-0.6 1.7q0 2 2.7 3.5t6.5 1.5q1.6 0 3.1-0.5t2.8-1.1 2-2.1 0.7-3z m8.1 4.9q0 3.5-2.5 6t-6.1 2.5q-2.9 0-5.2-1.7-1.7 0.3-3.4 0.3-3.1 0-6.1-1.2t-5-3.4-3.3-5-1.3-6.1q0-1.6 0.4-3.4-1.8-2.3-1.8-5.2 0-3.5 2.5-6t6.1-2.5q2.9 0 5.2 1.7 1.7-0.3 3.3-0.3 3.2 0 6.1 1.2t5.1 3.4 3.3 5 1.3 6.1q0 1.6-0.4 3.3 1.8 2.4 1.8 5.3z' })
                )
            );
        }
    }]);

    return FaSkype;
}(React.Component);

exports.default = FaSkype;
module.exports = exports['default'];