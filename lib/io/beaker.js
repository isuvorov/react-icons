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

var IoBeaker = function (_React$Component) {
    _inherits(IoBeaker, _React$Component);

    function IoBeaker() {
        _classCallCheck(this, IoBeaker);

        return _possibleConstructorReturn(this, (IoBeaker.__proto__ || Object.getPrototypeOf(IoBeaker)).apply(this, arguments));
    }

    _createClass(IoBeaker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.3 15h18.7v17.5c0 0.7-0.5 1.3-1.2 1.3h-16.3c-0.7 0-1.2-0.6-1.2-1.3v-17.5z m16.8 11.9v-3.8c0-0.3-0.3-0.6-0.6-0.6s-0.6 0.3-0.6 0.6v3.8c0 0.3 0.3 0.6 0.6 0.6s0.6-0.3 0.6-0.6z m-0.6-5.6c0.3 0 0.6-0.4 0.6-0.7s-0.3-0.6-0.6-0.6-0.6 0.3-0.6 0.6 0.3 0.7 0.6 0.7z m7.3-18.8c0.2 0 0.2 0.2 0.2 0.2s-0.2 0.3-0.2 0.4-1 1.6-1 3.2v26.2c0 2.7-2.3 5-5 5h-16.3c-2.7 0-5-2.3-5-5v-24c0-2.5-0.2-2.6-2.5-2.9 0-0.9 0.9-3.1 5.1-3.1h24.7z m-3.5 3.8c0-0.4 0-1.3 0-1.3h-21.3c-0.1 0-0.2 0-0.3 0.1 0.4 0.5 0.3 2.5 0.3 3.4v24c0 1.4 1.1 2.5 2.5 2.5h16.4c1.3 0 2.4-1.1 2.4-2.5v-26.2z' })
                )
            );
        }
    }]);

    return IoBeaker;
}(React.Component);

exports.default = IoBeaker;
module.exports = exports['default'];