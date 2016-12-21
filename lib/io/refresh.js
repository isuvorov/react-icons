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

var IoRefresh = function (_React$Component) {
    _inherits(IoRefresh, _React$Component);

    function IoRefresh() {
        _classCallCheck(this, IoRefresh);

        return _possibleConstructorReturn(this, (IoRefresh.__proto__ || Object.getPrototypeOf(IoRefresh)).apply(this, arguments));
    }

    _createClass(IoRefresh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 27.5l-8.1-8.7h5.8c-0.6-5.1-5-8.8-10.2-8.8-5.5 0-10 4.5-10 10s4.5 10 10 10c2.2 0 4.1-0.6 5.9-1.9l0.4-0.4 3.4 3.6-0.6 0.5c-2.6 2-5.7 3.2-9.1 3.2-7.1 0-13.1-5-14.6-11.6 0-0.1-0.1-0.2-0.1-0.3v-0.2s-0.1-0.2-0.1-0.2v-0.1c0-0.1 0-0.3 0-0.3-0.1-0.5-0.2-1-0.2-1.5v-1.6c0-0.4 0.1-1 0.2-1.5 0 0 0-0.2 0-0.3v-0.1c0 0 0.1 0 0.1-0.1v-0.3c0-0.1 0.1-0.2 0.1-0.3 1.6-6.6 7.5-11.6 14.6-11.6 0.9 0 1.6 0.1 2.4 0.2h0.3c4.5 0.8 8.3 3.7 10.4 7.5 1 1.8 1.7 3.9 1.8 6.1h5.1z' })
                )
            );
        }
    }]);

    return IoRefresh;
}(React.Component);

exports.default = IoRefresh;
module.exports = exports['default'];