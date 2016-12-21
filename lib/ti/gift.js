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

var TiGift = function (_React$Component) {
    _inherits(TiGift, _React$Component);

    function TiGift() {
        _classCallCheck(this, TiGift);

        return _possibleConstructorReturn(this, (TiGift.__proto__ || Object.getPrototypeOf(TiGift)).apply(this, arguments));
    }

    _createClass(TiGift, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 13.3h-4c0.4-0.7 0.6-1.6 0.6-2.5 0-3.2-2.6-5.8-5.8-5.8-1.6 0-3.1 0.7-4.2 1.8-1-1.1-2.5-1.8-4.1-1.8-3.3 0-5.9 2.6-5.9 5.8 0 0.9 0.3 1.8 0.6 2.5h-3.9c-0.9 0-1.7 0.8-1.7 1.7v6.7c0 0.9 0.8 1.6 1.7 1.6v8.4c0 2.7 2.2 5 5 5h16.7c2.7 0 5-2.3 5-5v-8.4c0.9 0 1.6-0.7 1.6-1.6v-6.7c0-0.9-0.7-1.7-1.6-1.7z m-1.7 6.7h-8.3v-3.3h8.3v3.3z m-13.3-8.3h3.3v1.6h-3.3v-1.6z m3.3 5v3.3h-3.3v-3.3h3.3z m2.5-8.4c1.4 0 2.5 1.2 2.5 2.5s-1.1 2.5-2.5 2.5c-0.3 0-0.6 0-0.8-0.1v-1.5c0-0.9-0.7-1.6-1.6-1.7 0.4-1 1.3-1.7 2.4-1.7z m-10.8 2.5c0-1.3 1.1-2.5 2.5-2.5 1.1 0 2 0.7 2.3 1.7-0.8 0.1-1.5 0.8-1.5 1.7v1.5c-0.3 0.1-0.5 0.1-0.8 0.1-1.4 0-2.5-1.1-2.5-2.5z m3.3 5.9v3.3h-8.3v-3.3h8.3z m-5 16.6c-0.9 0-1.7-0.7-1.7-1.6v-10h6.7v11.6h-5z m6.7 0v-11.6h3.3v11.6h-3.3z m10 0h-5v-11.6h6.6v10c0 0.9-0.7 1.6-1.6 1.6z' })
                )
            );
        }
    }]);

    return TiGift;
}(React.Component);

exports.default = TiGift;
module.exports = exports['default'];