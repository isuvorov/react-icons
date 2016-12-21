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

var TiNotesOutline = function (_React$Component) {
    _inherits(TiNotesOutline, _React$Component);

    function TiNotesOutline() {
        _classCallCheck(this, TiNotesOutline);

        return _possibleConstructorReturn(this, (TiNotesOutline.__proto__ || Object.getPrototypeOf(TiNotesOutline)).apply(this, arguments));
    }

    _createClass(TiNotesOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.5 7.3c-0.6-0.6-1.4-0.9-2.2-0.9-0.1 0-0.2 0.1-0.4 0.1l-15 2.1c-1.6 0.2-2.9 1.6-2.9 3.3v10.1c-2.9 1-5 3.4-5 6.3 0 3.7 3.4 6.7 7.5 6.7 2.8 0 5.3-1.4 6.6-3.5 1.3 1.1 3.1 1.8 5.1 1.8 4.1 0 7.5-3 7.5-6.6v-16.9c0-1-0.4-1.9-1.2-2.5z m-12.2 19.4v-7.1l5-0.8v2.9c-2.8 0.4-5 2.5-5 5z m10 0c0 1.8-1.8 3.3-4.1 3.3s-4.2-1.5-4.2-3.3 1.9-3.4 4.2-3.4c0.3 0 0.5 0.1 0.8 0.1v-6.5l-8.3 1.2v10.2c0 1.9-1.9 3.4-4.2 3.4s-4.2-1.5-4.2-3.4 1.9-3.3 4.2-3.3c0.3 0 0.6 0 0.8 0.1v-13.2l15-2.1v16.9z' })
                )
            );
        }
    }]);

    return TiNotesOutline;
}(React.Component);

exports.default = TiNotesOutline;
module.exports = exports['default'];