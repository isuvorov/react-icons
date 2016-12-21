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

var TiDocumentAdd = function (_React$Component) {
    _inherits(TiDocumentAdd, _React$Component);

    function TiDocumentAdd() {
        _classCallCheck(this, TiDocumentAdd);

        return _possibleConstructorReturn(this, (TiDocumentAdd.__proto__ || Object.getPrototypeOf(TiDocumentAdd)).apply(this, arguments));
    }

    _createClass(TiDocumentAdd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 20h-3.3v-3.3c0-1-0.8-1.7-1.7-1.7s-1.7 0.7-1.7 1.7v3.3h-3.3c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6h3.3v3.4c0 0.9 0.8 1.6 1.7 1.6s1.7-0.7 1.7-1.6v-3.4h3.3c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7z m7.8-7.8l-6.6-6.7c-0.3-0.3-0.8-0.5-1.2-0.5h-13.3c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h16.6c2.8 0 5-2.2 5-5v-16.7c0-0.4-0.1-0.8-0.5-1.1z m-3.5 1.1h-1.8c-1.4 0-2.5-1.1-2.5-2.5v-1.8l4.3 4.3z m-1 18.4h-16.6c-1 0-1.7-0.8-1.7-1.7v-20c0-0.9 0.7-1.7 1.7-1.7h11.6v2.5c0 2.3 1.9 4.2 4.2 4.2h2.5v15c0 0.9-0.7 1.7-1.7 1.7z' })
                )
            );
        }
    }]);

    return TiDocumentAdd;
}(React.Component);

exports.default = TiDocumentAdd;
module.exports = exports['default'];