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

var FaChrome = function (_React$Component) {
    _inherits(FaChrome, _React$Component);

    function FaChrome() {
        _classCallCheck(this, FaChrome);

        return _possibleConstructorReturn(this, (FaChrome.__proto__ || Object.getPrototypeOf(FaChrome)).apply(this, arguments));
    }

    _createClass(FaChrome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.9 0q5.4 0 10.1 2.7 5.2 3 7.9 8.3l-16.6-0.9q-3.6-0.2-6.6 1.7t-4.1 5.1l-6.2-9.5q2.9-3.5 7-5.4t8.5-2z m-16.6 9l7.5 14.8q1.6 3.2 4.7 4.9t6.5 1l-5.1 10.1q-4.7-0.8-8.6-3.6t-6.1-7-2.2-9.2q0-6 3.3-11z m35.4 3.8q1.3 3.4 1.3 6.9t-1.1 6.9-3.4 6-5.5 4.7q-5.1 3-11.1 2.7l9-13.9q2-3 1.9-6.5t-2.4-6.2z m-18.7 0.5q2.8 0 4.8 1.9t1.9 4.8-1.9 4.8-4.8 1.9-4.8-1.9-1.9-4.8 1.9-4.8 4.8-1.9z' })
                )
            );
        }
    }]);

    return FaChrome;
}(React.Component);

exports.default = FaChrome;
module.exports = exports['default'];