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

var TiFilm = function (_React$Component) {
    _inherits(TiFilm, _React$Component);

    function TiFilm() {
        _classCallCheck(this, TiFilm);

        return _possibleConstructorReturn(this, (TiFilm.__proto__ || Object.getPrototypeOf(TiFilm)).apply(this, arguments));
    }

    _createClass(TiFilm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 13.3v11.7h13.4v-11.7h-13.4z m11.7 10h-10v-8.3h10v8.3z m3.3-20h-5v3.4h-6.6v-3.4h-5c-2.8 0-5 2.3-5 5v21.7c0 2.8 2.2 5 5 5h5v-3.3h6.6v3.3h5c2.8 0 5-2.2 5-5v-21.7c0-2.7-2.2-5-5-5z m1.7 6.7c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6v1.7c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6v1.7c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6v1.7c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6v1.7c0 0.9-0.7 1.7-1.7 1.7h-1.6v-3.4h-13.4v3.4h-1.6c-1 0-1.7-0.8-1.7-1.7v-1.7c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7v-1.7c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7v-1.7c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7v-1.7c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7v-1.7c0-0.9 0.7-1.6 1.7-1.6h1.6v3.3h13.4v-3.3h1.6c1 0 1.7 0.7 1.7 1.6v1.7z' })
                )
            );
        }
    }]);

    return TiFilm;
}(React.Component);

exports.default = TiFilm;
module.exports = exports['default'];