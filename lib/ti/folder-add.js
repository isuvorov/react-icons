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

var TiFolderAdd = function (_React$Component) {
    _inherits(TiFolderAdd, _React$Component);

    function TiFolderAdd() {
        _classCallCheck(this, TiFolderAdd);

        return _possibleConstructorReturn(this, (TiFolderAdd.__proto__ || Object.getPrototypeOf(TiFolderAdd)).apply(this, arguments));
    }

    _createClass(TiFolderAdd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 10h-10c0-1.8-1.5-3.3-3.3-3.3h-6.7c-2.8 0-5 2.2-5 5v16.6c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5v-13.3c0-2.8-2.2-5-5-5z m0 20h-20c-0.9 0-1.7-0.7-1.7-1.7v-11.6h6.7c0.5 0 0.8-0.4 0.8-0.9s-0.3-0.8-0.8-0.8h-6.7v-3.3c0-1 0.8-1.7 1.7-1.7h6.7c0 1.8 1.5 3.3 3.3 3.3h10c0.9 0 1.7 0.8 1.7 1.7h-6.7c-0.5 0-0.8 0.4-0.8 0.8s0.3 0.9 0.8 0.9h6.7v11.6c0 1-0.8 1.7-1.7 1.7z m-5-10h-3.3v-3.3c0-1-0.8-1.7-1.7-1.7s-1.7 0.7-1.7 1.7v3.3h-3.3c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6h3.3v3.4c0 0.9 0.8 1.6 1.7 1.6s1.7-0.7 1.7-1.6v-3.4h3.3c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7z' })
                )
            );
        }
    }]);

    return TiFolderAdd;
}(React.Component);

exports.default = TiFolderAdd;
module.exports = exports['default'];