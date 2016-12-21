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

var TiCode = function (_React$Component) {
    _inherits(TiCode, _React$Component);

    function TiCode() {
        _classCallCheck(this, TiCode);

        return _possibleConstructorReturn(this, (TiCode.__proto__ || Object.getPrototypeOf(TiCode)).apply(this, arguments));
    }

    _createClass(TiCode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.6 30c-0.8 0-1.7-0.3-2.3-1l-7.4-7.3 7.4-7.4c1.3-1.3 3.4-1.3 4.7 0 1.3 1.3 1.3 3.4 0 4.7l-2.7 2.7 2.7 2.6c1.3 1.3 1.3 3.4 0 4.7-0.7 0.7-1.5 1-2.4 1z m12.8 0c-0.9 0-1.7-0.3-2.4-1-1.3-1.3-1.3-3.4 0-4.7l2.7-2.6-2.7-2.7c-1.3-1.3-1.3-3.4 0-4.7 1.3-1.3 3.4-1.3 4.7 0l7.4 7.4-7.4 7.3c-0.6 0.7-1.5 1-2.3 1z' })
                )
            );
        }
    }]);

    return TiCode;
}(React.Component);

exports.default = TiCode;
module.exports = exports['default'];