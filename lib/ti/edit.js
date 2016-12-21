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

var TiEdit = function (_React$Component) {
    _inherits(TiEdit, _React$Component);

    function TiEdit() {
        _classCallCheck(this, TiEdit);

        return _possibleConstructorReturn(this, (TiEdit.__proto__ || Object.getPrototypeOf(TiEdit)).apply(this, arguments));
    }

    _createClass(TiEdit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.9 8.9l-4.8-4.8c-0.5-0.5-1.1-0.8-1.7-0.8-0.7 0-1.3 0.3-1.8 0.8l-5.9 5.9h-15c-1 0-1.7 0.7-1.7 1.7v21.6c0 1 0.8 1.7 1.7 1.7h21.6c1 0 1.7-0.7 1.7-1.7v-15l5.9-5.9c0.5-0.5 0.8-1.1 0.8-1.8s-0.3-1.2-0.8-1.7z m-16.7 15.6l-3.7-3.7 10.5-10.5 3.7 3.7-10.5 10.5z m-4.3-2.3l2.9 2.9-2.8-0.1-0.1-2.8z m11.8 9.5h-18.4v-18.4h10l-5.3 5.3c-0.5 0.5-0.8 1.4-1 2.2-0.3 0.8-0.3 1.7-0.3 2.4v5.1h5.1c0.7 0 1.8-0.1 2.6-0.4 0.8-0.4 1.5-0.6 2-1.1l5.3-5.1v10z m4.1-18.9l-3.6-3.6 2.2-2.2 3.6 3.6-2.2 2.2z' })
                )
            );
        }
    }]);

    return TiEdit;
}(React.Component);

exports.default = TiEdit;
module.exports = exports['default'];