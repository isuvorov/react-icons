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

var MdLayersClear = function (_React$Component) {
    _inherits(MdLayersClear, _React$Component);

    function MdLayersClear() {
        _classCallCheck(this, MdLayersClear);

        return _possibleConstructorReturn(this, (MdLayersClear.__proto__ || Object.getPrototypeOf(MdLayersClear)).apply(this, arguments));
    }

    _createClass(MdLayersClear, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.5 1.6l31.1 31.3-2.1 2.1-6.2-6.3-8.3 6.4-15-11.7 2.7-2.1 12.3 9.6 5.9-4.6-2.4-2.3-3.5 2.6c-5-3.8-10-7.7-15-11.6l5.4-4.2-7-7z m29.5 13.4c-2.3 1.7-4.5 3.5-6.7 5.2l-13.1-13.1 4.8-3.7z m-2 10l-2.4-2.4 2-1.5 2.4 2.3z' })
                )
            );
        }
    }]);

    return MdLayersClear;
}(React.Component);

exports.default = MdLayersClear;
module.exports = exports['default'];