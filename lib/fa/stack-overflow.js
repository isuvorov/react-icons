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

var FaStackOverflow = function (_React$Component) {
    _inherits(FaStackOverflow, _React$Component);

    function FaStackOverflow() {
        _classCallCheck(this, FaStackOverflow);

        return _possibleConstructorReturn(this, (FaStackOverflow.__proto__ || Object.getPrototypeOf(FaStackOverflow)).apply(this, arguments));
    }

    _createClass(FaStackOverflow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.8 36.4h-25v-10.7h-3.6v14.3h32.1v-14.3h-3.5v10.7z m-21.1-11.7l0.8-3.5 17.5 3.7-0.8 3.5z m2.3-8.3l1.5-3.3 16.2 7.6-1.5 3.2z m4.5-8l2.3-2.7 13.7 11.4-2.3 2.8z m8.9-8.4l10.6 14.3-2.8 2.2-10.7-14.4z m-16 32.8v-3.5h17.8v3.5h-17.8z' })
                )
            );
        }
    }]);

    return FaStackOverflow;
}(React.Component);

exports.default = FaStackOverflow;
module.exports = exports['default'];