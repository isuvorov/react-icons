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

var TiTag = function (_React$Component) {
    _inherits(TiTag, _React$Component);

    function TiTag() {
        _classCallCheck(this, TiTag);

        return _possibleConstructorReturn(this, (TiTag.__proto__ || Object.getPrototypeOf(TiTag)).apply(this, arguments));
    }

    _createClass(TiTag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 6.7c2.1 0 4.3 0.8 5.9 2.4l5.8 5.9 8.3 8.3-11.7 11.7-9.1-9.2c-0.1 0.1-5.1-4.9-5.1-4.9-3.2-3.3-3.2-8.5 0-11.8 1.6-1.6 3.8-2.4 5.9-2.4z m0-3.4c-3.1 0-6 1.2-8.2 3.5-2.3 2.1-3.5 5.1-3.5 8.2s1.2 6 3.5 8.3l5 5c0.1 0.1 0.3 0.3 0.5 0.4l8.7 8.7c0.6 0.6 1.5 0.9 2.3 0.9s1.7-0.3 2.4-0.9l11.7-11.7c1.3-1.3 1.3-3.4 0-4.7l-8.4-8.4-5.7-5.8c-2.3-2.3-5.2-3.5-8.3-3.5z m0 9.2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z m0-1.7c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2c0-2.3-1.9-4.2-4.2-4.2z' })
                )
            );
        }
    }]);

    return TiTag;
}(React.Component);

exports.default = TiTag;
module.exports = exports['default'];