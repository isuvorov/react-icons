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

var TiAttachment = function (_React$Component) {
    _inherits(TiAttachment, _React$Component);

    function TiAttachment() {
        _classCallCheck(this, TiAttachment);

        return _possibleConstructorReturn(this, (TiAttachment.__proto__ || Object.getPrototypeOf(TiAttachment)).apply(this, arguments));
    }

    _createClass(TiAttachment, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.6 11.1c-2.6-2.6-6.8-2.6-9.4 0l-7.6 7.5c-0.8 0.8-1.2 1.8-1.2 3 0 1.1 0.4 2.1 1.2 2.9 0.8 0.8 1.9 1.2 3 1.2 1 0 2.1-0.4 2.9-1.2l3.5-3.5c0.7-0.7 1-1.5 1-2.4 0-0.8-0.3-1.7-1-2.3l-5.8 5.9c-0.4 0.3-0.9 0.3-1.2 0-0.2-0.3-0.3-0.5-0.3-0.6 0-0.2 0.1-0.4 0.3-0.6l7.5-7.6c1.3-1.3 3.4-1.3 4.8 0 1.2 1.3 1.2 3.4 0 4.7l-11.8 11.8c-1.3 1.3-3.5 1.3-4.7 0-1.4-1.3-1.4-3.4 0-4.7l0.1-0.2c-0.7-1-1.2-2.2-1.2-3.5l-1.3 1.3c-2.6 2.6-2.6 6.9 0 9.5 1.3 1.3 3 1.9 4.7 1.9s3.4-0.6 4.7-1.9l11.8-11.8c2.6-2.6 2.6-6.8 0-9.4z' })
                )
            );
        }
    }]);

    return TiAttachment;
}(React.Component);

exports.default = TiAttachment;
module.exports = exports['default'];