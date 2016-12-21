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

var TiNews = function (_React$Component) {
    _inherits(TiNews, _React$Component);

    function TiNews() {
        _classCallCheck(this, TiNews);

        return _possibleConstructorReturn(this, (TiNews.__proto__ || Object.getPrototypeOf(TiNews)).apply(this, arguments));
    }

    _createClass(TiNews, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 6.7h-30c-1.8 0-3.3 1.5-3.3 3.3v20c0 1.8 1.5 3.3 3.3 3.3h30c1.8 0 3.3-1.5 3.3-3.3v-20c0-1.8-1.5-3.3-3.3-3.3z m-30 3.3h13.3v20h-13.3v-20z m30 20h-15v-20h15l0 20z m-1.7-7.5c0-0.5-0.3-0.8-0.8-0.8h-1.7c-0.4 0-0.8 0.3-0.8 0.8v5c0 0.5 0.4 0.8 0.8 0.8h1.7c0.5 0 0.8-0.3 0.8-0.8v-5z m-5-10c0-0.5-0.3-0.8-0.8-0.8h-5c-0.5 0-0.8 0.3-0.8 0.8v8.3c0 0.5 0.3 0.9 0.8 0.9h5c0.5 0 0.8-0.4 0.8-0.9v-8.3z m2.5 4.2h1.7c0.5 0 0.8-0.4 0.8-0.9s-0.3-0.8-0.8-0.8h-1.7c-0.4 0-0.8 0.4-0.8 0.8s0.4 0.9 0.8 0.9z m0 3.3h1.7c0.5 0 0.8-0.4 0.8-0.8s-0.3-0.9-0.8-0.9h-1.7c-0.4 0-0.8 0.4-0.8 0.9s0.4 0.8 0.8 0.8z m-8.3 5h5c0.5 0 0.8-0.4 0.8-0.8s-0.3-0.9-0.8-0.9h-5c-0.5 0-0.8 0.4-0.8 0.9s0.3 0.8 0.8 0.8z m5 1.7h-5c-0.5 0-0.8 0.3-0.8 0.8s0.3 0.8 0.8 0.8h5c0.5 0 0.8-0.3 0.8-0.8s-0.3-0.8-0.8-0.8z m3.3-13.4h1.7c0.5 0 0.8-0.3 0.8-0.8s-0.3-0.8-0.8-0.8h-1.7c-0.4 0-0.8 0.3-0.8 0.8s0.4 0.8 0.8 0.8z m-14.1-0.8c0-0.5-0.4-0.8-0.9-0.8h-8.3c-0.5 0-0.8 0.3-0.8 0.8v5c0 0.5 0.3 0.8 0.8 0.8h8.3c0.5 0 0.9-0.3 0.9-0.8v-5z m-0.9 10.8h-8.3c-0.5 0-0.8 0.4-0.8 0.9s0.3 0.8 0.8 0.8h8.3c0.5 0 0.9-0.4 0.9-0.8s-0.4-0.9-0.9-0.9z m0-3.3h-8.3c-0.5 0-0.8 0.4-0.8 0.8s0.3 0.9 0.8 0.9h8.3c0.5 0 0.9-0.4 0.9-0.9s-0.4-0.8-0.9-0.8z m0 6.7h-8.3c-0.5 0-0.8 0.3-0.8 0.8s0.3 0.8 0.8 0.8h8.3c0.5 0 0.9-0.3 0.9-0.8s-0.4-0.8-0.9-0.8z' })
                )
            );
        }
    }]);

    return TiNews;
}(React.Component);

exports.default = TiNews;
module.exports = exports['default'];