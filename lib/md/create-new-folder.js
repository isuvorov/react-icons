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

var MdCreateNewFolder = function (_React$Component) {
    _inherits(MdCreateNewFolder, _React$Component);

    function MdCreateNewFolder() {
        _classCallCheck(this, MdCreateNewFolder);

        return _possibleConstructorReturn(this, (MdCreateNewFolder.__proto__ || Object.getPrototypeOf(MdCreateNewFolder)).apply(this, arguments));
    }

    _createClass(MdCreateNewFolder, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 23.4v-3.4h-5v-5h-3.2v5h-5v3.4h5v5h3.2v-5h5z m1.8-13.4q1.4 0 2.3 1t0.9 2.4v16.6q0 1.4-0.9 2.4t-2.3 1h-26.8q-1.4 0-2.3-1t-0.9-2.4v-20q0-1.4 0.9-2.4t2.3-1h10l3.4 3.4h13.4z' })
                )
            );
        }
    }]);

    return MdCreateNewFolder;
}(React.Component);

exports.default = MdCreateNewFolder;
module.exports = exports['default'];