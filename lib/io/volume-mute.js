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

var IoVolumeMute = function (_React$Component) {
    _inherits(IoVolumeMute, _React$Component);

    function IoVolumeMute() {
        _classCallCheck(this, IoVolumeMute);

        return _possibleConstructorReturn(this, (IoVolumeMute.__proto__ || Object.getPrototypeOf(IoVolumeMute)).apply(this, arguments));
    }

    _createClass(IoVolumeMute, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 17l3.7-4v14l-3.7-4h-5.1v-6h5.1z m8.4-12.3c5.4 3 9.1 8.7 9.1 15.3 0 9.7-7.8 17.5-17.5 17.5-3 0-5.9-0.8-8.4-2.1l-0.1-0.1c-5.4-3-9-8.7-9-15.3 0-9.7 7.8-17.5 17.5-17.5 3 0 5.9 0.8 8.4 2.2h0z m2.4 23c1.5-2.2 2.6-4.8 2.6-7.7 0-5.2-3-9.6-7.2-11.8-0.5-0.2-0.9-0.5-1.4-0.6-1.4-0.6-3.1-0.9-4.8-0.9-2.9 0-5.5 1-7.7 2.5l5.7 5.8h-6l-2.8-2.7c-1.5 2.2-2.5 4.8-2.5 7.7 0 5.1 2.8 9.5 7 11.7 0.5 0.3 1.1 0.6 1.5 0.7 1.5 0.6 3.1 0.9 4.8 0.9 2.9 0 5.6-1 7.8-2.5l-1.6-1.6v-6z' })
                )
            );
        }
    }]);

    return IoVolumeMute;
}(React.Component);

exports.default = IoVolumeMute;
module.exports = exports['default'];