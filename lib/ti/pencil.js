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

var TiPencil = function (_React$Component) {
    _inherits(TiPencil, _React$Component);

    function TiPencil() {
        _classCallCheck(this, TiPencil);

        return _possibleConstructorReturn(this, (TiPencil.__proto__ || Object.getPrototypeOf(TiPencil)).apply(this, arguments));
    }

    _createClass(TiPencil, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 11.5l-6.5-6.5c-0.5-0.5-1.1-0.7-1.7-0.7-0.7 0-1.3 0.2-1.8 0.7l-18.2 18.2c-0.5 0.5-1 1.2-1.3 2-0.3 0.8-0.5 1.6-0.5 2.3v7.5h7.5c0.7 0 1.5-0.2 2.3-0.5s1.5-0.8 2-1.3l18.2-18.2c0.5-0.5 0.7-1.1 0.7-1.8 0-0.6-0.2-1.2-0.7-1.7z m-25.4 13.6l13.8-13.8 2.1 2-13.8 13.9-2.1-2.1z m2.9 6.6h-2.5l-1.7-1.7v-2.5c0-0.1 0.1-0.5 0.3-1 0 0 4.9 4.9 4.9 4.9-0.5 0.2-0.9 0.3-1 0.3z m2.4-1.3l-2.1-2.1 13.9-13.8 2 2.1-13.8 13.8z m15-15l-5.3-5.3 2.2-2.2 5.2 5.3-2.1 2.2z' })
                )
            );
        }
    }]);

    return TiPencil;
}(React.Component);

exports.default = TiPencil;
module.exports = exports['default'];