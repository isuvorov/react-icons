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

var IoThumbsup = function (_React$Component) {
    _inherits(IoThumbsup, _React$Component);

    function IoThumbsup() {
        _classCallCheck(this, IoThumbsup);

        return _possibleConstructorReturn(this, (IoThumbsup.__proto__ || Object.getPrototypeOf(IoThumbsup)).apply(this, arguments));
    }

    _createClass(IoThumbsup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.1 20.2c0.8 0.4 1.4 1.4 1.4 2.3 0 1.1-0.6 2-1.5 2.3 0.3 0.4 0.4 1 0.4 1.5 0 1.1-0.6 2-1.5 2.4 0.2 0.4 0.4 0.8 0.4 1.3 0 1.4-0.9 1.9-2.8 2.3s-5.7 1-9.8 0.7c-1.8 0-4.3-0.5-5.9-0.5v2.5h-8.8v-18.7h8.8v1.2c1.1-0.1 2.4-0.3 3.1-1.1 1.7-1.8 3.1-5.1 3.1-8.4 0-1.5-0.1-2.3 0.3-2.7 1-1 3.5 0.7 4.1 2.9 0.7 2.7 0.1 4.8-0.1 6.8h8c1.5 0 2.7 1.2 2.7 2.7 0 1.1-0.8 2.2-1.9 2.5z m-24.3 12.3c0.7 0 1.2-0.5 1.2-1.2s-0.5-1.3-1.2-1.3-1.3 0.5-1.3 1.3 0.5 1.2 1.3 1.2z' })
                )
            );
        }
    }]);

    return IoThumbsup;
}(React.Component);

exports.default = IoThumbsup;
module.exports = exports['default'];