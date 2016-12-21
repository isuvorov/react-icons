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

var MdBuild = function (_React$Component) {
    _inherits(MdBuild, _React$Component);

    function MdBuild() {
        _classCallCheck(this, MdBuild);

        return _possibleConstructorReturn(this, (MdBuild.__proto__ || Object.getPrototypeOf(MdBuild)).apply(this, arguments));
    }

    _createClass(MdBuild, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.8 31.6c0.7 0.5 0.7 1.7-0.1 2.4l-3.9 3.8c-0.7 0.7-1.6 0.7-2.3 0l-15.2-15.1c-3.8 1.4-8.3 0.7-11.5-2.5-3.3-3.4-4.2-8.4-2.1-12.4l7.3 7.2 5-5-7.2-7.2c4-1.8 9-1.2 12.4 2.2 3.2 3.2 3.9 7.7 2.5 11.5z' })
                )
            );
        }
    }]);

    return MdBuild;
}(React.Component);

exports.default = MdBuild;
module.exports = exports['default'];