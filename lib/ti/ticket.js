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

var TiTicket = function (_React$Component) {
    _inherits(TiTicket, _React$Component);

    function TiTicket() {
        _classCallCheck(this, TiTicket);

        return _possibleConstructorReturn(this, (TiTicket.__proto__ || Object.getPrototypeOf(TiTicket)).apply(this, arguments));
    }

    _createClass(TiTicket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.8 13.5l-8.9-9c-1.9-1.9-5.2-1.9-7.1 0l-15.3 15c-0.9 0.9-1.4 2.2-1.4 3.5 0 1.3 0.5 2.6 1.4 3.5l9 9c0.9 0.9 2.2 1.5 3.5 1.5 1.3 0 2.6-0.6 3.5-1.5l15.3-15c0.9-0.9 1.5-2.2 1.5-3.5s-0.5-2.6-1.5-3.5z m-2.4 4.6l-15.2 15c-0.6 0.7-1.8 0.7-2.4 0l-2.1-2.1c1.2-1.3 1.1-3.3-0.1-4.6-1.3-1.2-3.3-1.3-4.6-0.1l-2.1-2.1c-0.3-0.3-0.5-0.7-0.5-1.2s0.2-0.8 0.5-1.1l15.2-15c0.3-0.3 0.8-0.5 1.2-0.5 0.5 0 0.9 0.2 1.2 0.5l2.1 2.1c-1.1 1.3-1.1 3.3 0.1 4.6 1.3 1.2 3.3 1.3 4.6 0.1l2.2 2.1c0.3 0.3 0.4 0.7 0.4 1.2s-0.1 0.8-0.5 1.1z m-14.1 10.3l-7.7-7.8 9.4-9 7.8 7.8-9.5 9z m-5.3-7.7l5.4 5.4 7-6.8-5.4-5.4-7 6.8z' })
                )
            );
        }
    }]);

    return TiTicket;
}(React.Component);

exports.default = TiTicket;
module.exports = exports['default'];