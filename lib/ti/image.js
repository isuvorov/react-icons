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

var TiImage = function (_React$Component) {
    _inherits(TiImage, _React$Component);

    function TiImage() {
        _classCallCheck(this, TiImage);

        return _possibleConstructorReturn(this, (TiImage.__proto__ || Object.getPrototypeOf(TiImage)).apply(this, arguments));
    }

    _createClass(TiImage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.3 14.2c0 2.3-1.8 4.1-4.1 4.1s-4.2-1.8-4.2-4.1c0-2.3 1.9-4.2 4.2-4.2s4.1 1.9 4.1 4.2z m8.4 2.5c-3.4 0-5 5-7.5 5s-2.5-1.7-5.9-1.7c-3.3 0-5 6.7-5 6.7h23.4s-1.7-10-5-10z m6.6-11.7h-26.6c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.9 1.5 3.4 3.4 3.4h26.6c1.9 0 3.4-1.5 3.4-3.4v-20c0-1.8-1.5-3.3-3.4-3.3z m0 23.3h-26.6v-20h26.6v20z' })
                )
            );
        }
    }]);

    return TiImage;
}(React.Component);

exports.default = TiImage;
module.exports = exports['default'];