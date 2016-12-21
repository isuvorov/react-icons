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

var IoFilmMarker = function (_React$Component) {
    _inherits(IoFilmMarker, _React$Component);

    function IoFilmMarker() {
        _classCallCheck(this, IoFilmMarker);

        return _possibleConstructorReturn(this, (IoFilmMarker.__proto__ || Object.getPrototypeOf(IoFilmMarker)).apply(this, arguments));
    }

    _createClass(IoFilmMarker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.8 16.3c0.7 0 1.2 0.5 1.2 1.1v16.4c0 0.7-0.5 1.2-1.2 1.2h-30c-0.8 0-1.3-0.5-1.3-1.2v-16.4c0-0.6 0.5-1.1 1-1.1-0.1-0.2-0.2-0.4-0.3-0.6l-0.7-3.5c-0.2-0.6 0.4-1.3 1-1.4l28.9-5.8c0.6-0.2 1.3 0.3 1.4 0.9l0.7 3.6c0.2 0.7-0.3 1.3-0.9 1.4l-26.7 5.4h26.9z m-11.2 15.1l-1.6-4.5 4-2.8h-4.8l-1.6-4.6-1.5 4.6h-4.9l4 2.8-1.5 4.5 3.9-2.8z' })
                )
            );
        }
    }]);

    return IoFilmMarker;
}(React.Component);

exports.default = IoFilmMarker;
module.exports = exports['default'];